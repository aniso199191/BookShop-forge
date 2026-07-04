/* METADATA {
  "name": "qq_bot_mcp",
  "description": "QQ Bot Manager - 在 Operit AI 中接入 QQ",
  "tools": [
    { 
      "name": "send_message", 
      "description": "发送QQ消息", 
      "parameters": [ 
        { "name": "target", "description": "好友QQ号或群号", "type": "string", "required": true },
        { "name": "content", "description": "消息内容", "type": "string", "required": true }
      ] 
    }
  ],
  "category": "SOCIAL" 
} */

// 工具函数的具体实现
async function send_message(params) {
    const { target, content } = params;
    // 这里写调用 QQ API 的逻辑
    complete(`已向 ${target} 发送消息: ${content}`);
}

// 导出函数
exports.send_message = send_message;