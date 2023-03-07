## python 注入 frida js


import frida
import sys

import logging
import sys
import os
from logging import handlers
import time


def set_log():
    '''
    初始化日志配置
    @param level:设置的日志级别。
    @param filename: 日志文件名
    '''

    logger = logging.getLogger()  # 日志
    logger.setLevel(logging.DEBUG)
    if logger.handlers:
        for handler in logger.handlers:
            logger.removeHandler(handler)
    streamHandler = logging.StreamHandler(sys.stderr)

    log_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), './log')
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    log_file_name = os.path.join(log_dir, 'frida.log')
    fileHandler = handlers.TimedRotatingFileHandler(filename=log_file_name,when='D',backupCount=100, encoding='utf-8')

    LOG_FORMAT1 = '[%(asctime)s] [%(levelname)s] %(message)s'
    LOG_FORMAT2 = '[%(asctime)s] [%(levelname)s] %(message)s'
    formatter1 = logging.Formatter(
        fmt=LOG_FORMAT1,
        datefmt='%Y-%m-%d  %H:%M:%S'
    )
    formatter2 = logging.Formatter(
        fmt=LOG_FORMAT2,
        datefmt='%Y-%m-%d  %H:%M:%S'
    )
    streamHandler.setFormatter(formatter1)
    fileHandler.setFormatter(formatter2)
    logger.addHandler(streamHandler)
    logger.addHandler(fileHandler)
    return logger


log = set_log()

def on_message(message, data):
    if message['type'] == 'send':
        log.info(message["payload"])
    else:
        print(f"message: {message}")

jscode = open("index.js",encoding="utf-8").read()

device = frida.get_device_manager().enumerate_devices()[-1]

spawn = False # 是否以spawn方式注入进程
package_name = "com.android.settings"

if (spawn):
    pid = device.spawn([package_name])
    session = device.attach(pid)
else:
    # 如果是attach模式的话，需要根据package找出process pid
    pid = None
    for app in device.enumerate_applications():
        if package_name in app.identifier:
            pid = app.pid
            break
    if not pid:
        print(f"{package_name} 程序未运行或者不存在")
        sys.exit()
    session = device.attach(pid)

# 注入js代码
script = session.create_script(jscode)
script.on('message',on_message)
script.load()
if (spawn):
    device.resume(pid) # 继续进程
print("frida hook成功...")
sys.stdin.read()
