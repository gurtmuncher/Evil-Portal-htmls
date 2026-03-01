# Evil Portal HTMLs

Some evil portal htmls I made.

## What you need

- A wifi dev board like the esp32 board that you can buy from flippers website https://flipper.net/products/wifi-devboard
- Marauder firmware installed on your esp32 dev board
- And a Flipper Zero

## Files

- Google-Login.html - A google sign in that I tried to make look as close to the real thing as I could
- FaceBook-Login.html - A facebook sign in that I tried to make look as close to the real thing as I could
- Spectrum-Login - A Spectrum sign in that I tried to make look as close to the real thing as I could

## How to use

1. Take your sd card out your flipper and put it into your micro sd card reader and plug it into your pc and go to apps_data → evil_portal → html in qflipper or your file browser and then paste the htmls
2. Put the sd card back in your Flipper and Open apps  → GPIO  → ESP → [ESP32]Evil Portal
3. Pick your html file and start the portal

## How it works

When you make the evil portal it looks like a legit network. Someone may click on this network and when they do the html of your choosing will show a legit looking sign-in-page and when they type in there credentials it grabs them via /get and logs them on your flipper showing their login and password
## Changing stuff

If you wanna change things just edit the html.

## Also

I use Momentum custom firmware and I would recommend installing that on your flipper https://momentum-fw.dev/

## Disclaimer

Only use this if you have explicit permission to. I gurtmuncher am not responsible if you do something stupid with this. This was also built purely for educational purposes.
## Credits

I made these using htmls I found here for reference https://github.com/bigbrodude6119/flipper-zero-evil-portal. The styling is based on how these sites actually look.

Thats pretty much it. Lmk if something doesnt work and if you think something could be changed for the better feel free to open a pull request.