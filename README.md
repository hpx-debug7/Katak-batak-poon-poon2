# 🚀 PixelDrop

A lightweight, zero-dependency image optimization CLI tool written in Go.

## Features

- Compress PNG, JPEG, and WebP images with minimal quality loss
- Batch process entire directories
- Watch mode for automatic compression on file change
- Configurable quality thresholds per format
- Outputs a summary report after each run

## Installation

```bash
go install github.com/example/pixeldrop@latest
```

Or download a prebuilt binary from the [Releases](https://github.com/example/pixeldrop/releases) page.

## Usage

```bash
# Compress a single image
pixeldrop compress photo.jpg

# Batch compress a directory
pixeldrop compress ./images/ --output ./compressed/

# Watch mode
pixeldrop watch ./assets/

# Set custom quality (0-100)
pixeldrop compress photo.png --quality 85
```

## Configuration

Create a `pixeldrop.config.json` in your project root:

```json
{
  "quality": {
    "jpeg": 80,
    "png": 90,
    "webp": 85
  },
  "output_dir": "./dist/images",
  "preserve_structure": true
}
```

## Requirements

- Go 1.21+
- macOS, Linux, or Windows

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

MIT © 2024 PixelDrop Contributors
