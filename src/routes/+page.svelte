<!-- App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { createFrame } from '../utils/utils';

  const file = writable<File | null>(null);
  const imageUrl = writable<string>('');

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    const newFile = event.dataTransfer!.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const image = new Image();
      image.src = event.target!.result as string;
      image.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        const shadowOffset = 30;
        const borderWidth = 10;
        const topBarHeight = 30;
        const borderRadius = 10;
        const canvasWidth = image.width + shadowOffset * 2 + borderWidth * 2;
        const canvasHeight = image.height + shadowOffset * 2 + borderWidth + topBarHeight + borderRadius;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Draw border shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowOffsetX = shadowOffset;
        ctx.shadowOffsetY = shadowOffset;
        ctx.shadowBlur = 30;

        // Draw window background
        const gradient = ctx.createLinearGradient(0, 0, 0, topBarHeight);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
        ctx.fillStyle = gradient;
        ctx.fillRect(shadowOffset + borderWidth, shadowOffset + borderWidth, image.width, topBarHeight);
        ctx.shadowColor = 'transparent';
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(shadowOffset + borderWidth + borderRadius, shadowOffset + borderWidth + topBarHeight);
        ctx.lineTo(shadowOffset + borderWidth + image.width - borderRadius, shadowOffset + borderWidth + topBarHeight);
        ctx.quadraticCurveTo(shadowOffset + borderWidth + image.width, shadowOffset + borderWidth + topBarHeight, shadowOffset + borderWidth + image.width, shadowOffset + borderWidth + topBarHeight + borderRadius);
        ctx.lineTo(shadowOffset + borderWidth + image.width, shadowOffset + borderWidth + image.height + topBarHeight - borderRadius);
        ctx.quadraticCurveTo(shadowOffset + borderWidth + image.width, shadowOffset + borderWidth + image.height + topBarHeight, shadowOffset + borderWidth + image.width - borderRadius, shadowOffset + borderWidth + image.height + topBarHeight);
        ctx.lineTo(shadowOffset + borderWidth + borderRadius, shadowOffset + borderWidth + image.height + topBarHeight);
        ctx.quadraticCurveTo(shadowOffset + borderWidth, shadowOffset + borderWidth + image.height + topBarHeight, shadowOffset + borderWidth, shadowOffset + borderWidth + image.height + topBarHeight - borderRadius);
        ctx.lineTo(shadowOffset + borderWidth, shadowOffset + borderWidth + topBarHeight + borderRadius);
        ctx.quadraticCurveTo(shadowOffset + borderWidth, shadowOffset + borderWidth + topBarHeight, shadowOffset + borderWidth + borderRadius, shadowOffset + borderWidth + topBarHeight);
        ctx.closePath();
        ctx.fill();

        // Draw image
        ctx.drawImage(image, shadowOffset + borderWidth, shadowOffset + borderWidth + topBarHeight, image.width, image.height);

        const url = canvas.toDataURL('image/png');
        imageUrl.set(url);
      }
    }
    reader.readAsDataURL(newFile);
    file.set(newFile);
  }

  onMount(() => {
    const dropArea = document.querySelector('#drop-area')!;

    dropArea.addEventListener('dragenter', event => {
      event.stopPropagation();
      event.preventDefault();
      dropArea.classList.add('drag-enter');
    });

    dropArea.addEventListener('dragleave', event => {
      event.stopPropagation();
      event.preventDefault();
      dropArea.classList.remove('drag-enter');
    });

    dropArea.addEventListener('dragover', event => {
      event.stopPropagation();
      event.preventDefault();
    });

    (dropArea as HTMLElement).addEventListener('drop', (event: DragEvent) => {
      handleDrop(event);
    });
  });
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #drop-area {
    border: 5px dashed #ccc;
    padding: 20px;
  }

  #drop-area.drag-enter {
    background-color: #f0f0f0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ccc;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>

<main>
  <div id="drop-area">
    {#if $file}
      <img src={$imageUrl} alt="Framed image preview" />
      <p>Uploading {$file.name}...</p>
      <a download={$file.name} href={$imageUrl}>Download</a>
    {:else}
      <p>Drag and drop your image here</p>
    {/if}
  </div>
</main>
