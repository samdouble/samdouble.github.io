import argparse
import os
from pathlib import Path

from PIL import Image


def optimize_image(image_path, quality=85):
    """Optimize an image by resizing it if necessary and adjusting its quality."""
    try:
        with Image.open(image_path) as img:
            # Convert to RGB if the image is in RGBA
            if img.mode == "RGBA":
                img = img.convert("RGB")

            # Calculate the new size while keeping the ratio
            max_size = 1920  # Maximum width or height
            ratio = min(max_size / max(img.size[0], img.size[1]), 1.0)
            new_size = tuple(int(dim * ratio) for dim in img.size)

            # Resize if necessary
            if ratio < 1.0:
                img = img.resize(new_size, Image.Resampling.LANCZOS)

            # Save with optimization
            output_path = image_path
            img.save(output_path, "JPEG", quality=quality, optimize=True)

            return True
    except Exception as e:
        print(f"Error processing {image_path}: {str(e)}")
        return False


def process_directory(directory_path):
    """Process recursively all images in the directory."""
    image_extensions = {".jpg", ".jpeg", ".png"}
    processed = 0
    failed = 0

    for path in Path(directory_path).rglob("*"):
        if path.suffix.lower() in image_extensions:
            print(f"Processing {path}...")
            if optimize_image(str(path)):
                processed += 1
            else:
                failed += 1

    return processed, failed


def main():
    parser = argparse.ArgumentParser(description="Optimize images in a directory")
    parser.add_argument("directory", help="Path to the directory containing the images")
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print("The specified path is not a valid directory")
        return

    print(f"Starting optimization of images in {args.directory}")
    processed, failed = process_directory(args.directory)
    print("\nOptimization completed:")
    print(f"- Images processed successfully: {processed}")
    print(f"- Images failed: {failed}")


if __name__ == "__main__":
    main()
