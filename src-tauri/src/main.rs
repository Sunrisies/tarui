// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::process::Command;
// use std::os::windows::process::CommandExt;
// use std::path::PathBuf;
// use tauri::api::dialog::FileDialogBuilder;

use std::fs::read_to_string;  
use std::path::Path;  
  
#[tauri::command]  
fn read_file_content(file_path: String) -> Result<String, String> {  
    println!("-----{}------", file_path);
    let path = Path::new(&file_path);  
    match read_to_string(path) {  
        Ok(content) => Ok(content),  
        Err(e) => Err(format!("Error reading file: {}", e)),  
    }  
}
#[tauri::command]
fn my_custom_command(invoke_message: String) -> String {
    let output = if cfg!(target_os = "windows") {
        Command::new("cmd")
        // .creation_flags(0x08000000)
            .args(["/C",&invoke_message])
            .output()
            .expect("failed to execute process")
    } else {
        Command::new("sh")
            .arg("-c")
            .arg("echo hello")
            .output()
            .expect("failed to execute process")
    };

    let binding = String::from_utf8_lossy(&output.stdout);
    let hello = binding.trim();
    println!("{}", hello);
    hello.into()
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command,read_file_content])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
