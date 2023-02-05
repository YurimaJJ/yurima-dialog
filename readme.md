Yurima Dialog 1.0.0

Description:

    - This script opens a input page on Trigger.
    - Inputs can be up to 5 in a single page.

Dependencies:

    - Yurima Notify (I suggest you to use Yurima Notifier, but you can replace line 39 in client.lua with your own notifier.)

Instructions:

    - You need Trigger belowed event when you want to use the input dialogs.
    - For using this input menu you need to fill the placeholders.
    - Script counts your placeholders and open a dialog menu with those.
    - You can get input values from "result" array. (Exampled in Trigger)

Trigger (Client) Example:

    TriggerEvent("yurima:dialog:menu", "Title of Dialog Menu", {
        "placeholder 1",
        "placeholder 2",
        "placeholder 3",
        "placeholder 4",
        "placeholder 5"
        }, function(result)
           local resultOfPlaceholder1 = result[1]
           local resultOfPlaceholder2 = result[2]
           local resultOfPlaceholder3 = result[3]
           local resultOfPlaceholder4 = result[4]
           local resultOfPlaceholder5 = result[5]
        end
    end)

Please notify us if there is any issue, bug or vulnerability.
Join our Discord for support and future updates / patch notes: https://discord.gg/hcDYvNvUhr