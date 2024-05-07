import os

def list_files(startpath):
    for root, dirs, files in os.walk(startpath, topdown=True):
        # 排除特定目录
        dirs[:] = [d for d in dirs if d not in ['.idea', '.vscode', 'node_modules']]
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * level
        print(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f'{subindent}{f}')

rootdir = '.'  # 可以更改为任何目录
list_files(rootdir)
