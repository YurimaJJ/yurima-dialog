local dialogResult = nil
local function openDialogMenu(title, placeholdersCount, placeholders, cb)
	SetNuiFocus(true, true)
    SendNUIMessage({
		title = title,
		count = placeholdersCount,
		placeholders = placeholders,
		action = true
	})
	while dialogResult == nil do
		if dialogResult == false then
			cb(dialogResult)
			return false
		end
		Citizen.Wait(0)
	end
	cb(dialogResult)
	return true
end

function closeDialogMenu()
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = false
    })
end

RegisterNUICallback("result", function(data)
    closeDialogMenu()
    dialogResult = data
end)

RegisterNUICallback("closemenu", function(data)
    closeDialogMenu()
	dialogResult = false
end)

RegisterNUICallback("error", function(data)
	exports['yurima-notify']:pushNotification("Error", "Values can't be null", 5000, 'error')
end)

RegisterNetEvent("yurima:dialog:menu")
AddEventHandler("yurima:dialog:menu", function (title, placeholders, cb)
	dialogResult = nil
	local placeholdersCount = tableLength(placeholders)
    openDialogMenu(title, placeholdersCount, placeholders, function (result)
        if result ~= false then
            cb(result)
        end
    end)
end)

-- Test Function --
RegisterCommand('yuridialogtest', function()
    TriggerEvent("yurima:dialog:menu", "Test", {"Test1","Test2","Test3"}, function(result)
        print(json.encode(result))
		print(result[1])
    end)
end)

function tableLength(T)
    local count = 0
    for _ in pairs(T) do count = count + 1 end
    return count
end