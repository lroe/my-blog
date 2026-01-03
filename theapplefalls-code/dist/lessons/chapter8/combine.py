
import os

output_file = "combined.html"

html_files = sorted(
    f for f in os.listdir(".")
    if f.endswith(".html") and f != output_file
)

with open(output_file, "w", encoding="utf-8") as outfile:
    outfile.write("<!-- Combined HTML File -->\n\n")

    for filename in html_files:
        outfile.write(f"\n<!-- START: {filename} -->\n")
        with open(filename, "r", encoding="utf-8") as infile:
            outfile.write(infile.read())
        outfile.write(f"\n<!-- END: {filename} -->\n")

print(f"✅ Combined {len(html_files)} files into '{output_file}'")
