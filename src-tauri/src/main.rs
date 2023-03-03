use serde::Deserialize;
use tauri::api::drag_and_drop::{Files, Item};
use tauri::AppBuilder;

#[derive(Deserialize)]
struct DraggedFile {
    path: String,
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_drag_and_drop::DragAndDrop::default())
        .run(tauri::generate_context!())
        .expect("failed to run app");
    let app = AppBuilder::new()
        .setup(|_webview, _source| {
            tauri::api::drag_and_drop::on(
                |event| {
                    // The file(s) have been dropped on the app
                    let files: Vec<DraggedFile> = event
                        .items()
                        .iter()
                        .map(|item| {
                            let file = item.file().unwrap();
                            DraggedFile {
                                path: file.path().unwrap().to_str().unwrap().to_owned(),
                            }
                        })
                        .collect();
                    println!("Files dropped: {:?}", files);
                },
                |_error| {
                    // There was an error handling the drag and drop event
                    println!("Error handling drag and drop event!");
                },
            );
        })
        .build();

    app.run();
}
