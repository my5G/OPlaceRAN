ies = []
ies.append({ "iei" : "D-", "value" : "Configuration update indication", "type" : "Configuration update indication", "reference" : "9.10.3.16", "presence" : "O", "format" : "TV", "length" : "1"})
ies.append({ "iei" : "2C", "value" : "5G-GUTI", "type" : "5GS mobile identity", "reference" : "9.10.3.4", "presence" : "O", "format" : "TLV", "length" : "13"})
ies.append({ "iei" : "54", "value" : "TAI list", "type" : "5GS tracking area identity list", "reference" : "9.10.3.9", "presence" : "O", "format" : "TLV", "length" : "9-114"})
ies.append({ "iei" : "70", "value" : "Allowed NSSAI", "type" : "NSSAI", "reference" : "9.10.3.34", "presence" : "O", "format" : "TLV", "length" : "4-74"})
ies.append({ "iei" : "27", "value" : "Service area list", "type" : "Service area list", "reference" : "9.10.3.45", "presence" : "O", "format" : "TLV", "length" : "6-114"})
ies.append({ "iei" : "43", "value" : "Full name for network", "type" : "Network name", "reference" : "9.10.3.33", "presence" : "O", "format" : "TLV", "length" : "3-n"})
ies.append({ "iei" : "45", "value" : "Short name for network", "type" : "Network name", "reference" : "9.10.3.33", "presence" : "O", "format" : "TLV", "length" : "3-n"})
ies.append({ "iei" : "46", "value" : "Local time zone", "type" : "Time zone", "reference" : "9.10.3.47", "presence" : "O", "format" : "TV", "length" : "2"})
ies.append({ "iei" : "47", "value" : "Universal time and local time zone", "type" : "Time zone and time", "reference" : "9.10.3.48", "presence" : "O", "format" : "TV", "length" : "8"})
ies.append({ "iei" : "49", "value" : "Network daylight saving time", "type" : "Daylight saving time", "reference" : "9.10.3.17", "presence" : "O", "format" : "TLV", "length" : "3"})
ies.append({ "iei" : "79", "value" : "LADN information", "type" : "LADN information", "reference" : "9.10.3.27", "presence" : "O", "format" : "TLV-E", "length" : "3-1707"})
ies.append({ "iei" : "B-", "value" : "MICO indication", "type" : "MICO indication", "reference" : "9.10.3.28", "presence" : "O", "format" : "TV", "length" : "1"})
ies.append({ "iei" : "31", "value" : "Configured NSSAI", "type" : "NSSAI", "reference" : "9.10.3.34", "presence" : "O", "format" : "TLV", "length" : "4-146"})
ies.append({ "iei" : "11", "value" : "Rejected NSSAI", "type" : "Rejected NSSAI", "reference" : "9.10.3.42", "presence" : "O", "format" : "TLV", "length" : "4-42"})
msg_list[key]["ies"] = ies