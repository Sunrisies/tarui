// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::process::Command;
use std::os::windows::process::CommandExt;
// use std::path::PathBuf;
// use tauri::api::dialog::FileDialogBuilder;

#[tauri::command]
fn my_custom_command(invoke_message: String) -> String {
    let output = if cfg!(target_os = "windows") {
        Command::new("cmd")
        .creation_flags(0x08000000)
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

// #[tauri::command]
// fn on_dir() -> Option<PathBuf> {
//     match FileDialogBuilder::new().pick_folder() {
//         Ok(file_path) => Some(file_path),
//         Err(_) => None,
//     }
// }


#[tauri::command]
// fn my_custom_command(invoke_message: String) {
// let output = Command::new("netsh")
//     .arg("wlan")
//     .arg("show")
//     .arg("profiles")
//     .output()
//     .expect("failed to execute command");
// 处理并替换无效的UTF-8序列
// 创建GB2312编码器
// let decoder = UTF_8.new_decoder();

// 解码命令输出的字节数组
// let output_bytes = output.stdout;
// let (result, read, written, had_errors) = decoder.decode_to_str(&output_bytes);
// let output_string = String::from_utf8_lossy(&output.stdout);
// 打印处理后的命令输出
// println!("{}", invoke_message);
// output_string.into()
// }
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
