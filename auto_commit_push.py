import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess
import os

class ChangeHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        try:
            subprocess.run(["git", "add", "."], check=True)
            subprocess.run(["git", "commit", "-m", "Automated commit"], check=True)
            subprocess.run(["git", "push", "origin", "main"], check=True)
            print("Changes pushed to GitHub.")
        except subprocess.CalledProcessError as e:
            print(f"Error during git operation: {e}")

if __name__ == "__main__":
    path = r"C:\Users\SHS\Desktop\코딩기초 2기_이지후"
    if not os.path.isdir(path):
        print(f"The specified path does not exist: {path}")
        exit(1)

    event_handler = ChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    print(f"Monitoring changes in {path}...")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        observer.join()
