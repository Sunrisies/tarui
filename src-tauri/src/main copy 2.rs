// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tokio::process::Command as TokioCommand;

#[tauri::command]
async fn my_custom_command(invoke_message: String) -> String {
    // 创建一个Tokio的运行时环境
    // if cfg!(target_os = "windows") {
    //     TokioCommand::new("cmd")
    //         .creation_flags(0x08000000)
    //         .args(["/C", "chcp 65001"])
    //         .output()
    //         .await
    //         .expect("failed to execute process")
    // } else {
    //     TokioCommand::new("sh")
    //         .arg("-c")
    //         .arg("echo hello")
    //         .output()
    //         .await
    //         .expect("failed to execute process")
    // };
    let output = if cfg!(target_os = "windows") {
        TokioCommand::new("cmd")
            .creation_flags(0x08000000)
            .args(["/C","chcp 65001 &&", &invoke_message])
            .output()
            .await
            .expect("failed to execute process")
    } else {
        TokioCommand::new("sh")
            .arg("-c")
            .arg("echo hello")
            .output()
            .await
            .expect("failed to execute process")
    };

    let binding = String::from_utf8_lossy(&output.stdout);
    let hello = binding.trim();
    println!("{}",hello);
    hello.into()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
