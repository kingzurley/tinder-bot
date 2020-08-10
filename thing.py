import requests
import json

response = requests.get("https://quotes.rest/qod")
# Print the status code of the response.
print(response.text)

