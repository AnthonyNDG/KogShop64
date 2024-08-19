import json, os, re, uuid

def dataValidation(file_path):
    try:
        # Open and load the JSON file
        with open(file_path, 'r') as file:
            data = json.load(file)

        changes_made = False


        for i, obj in enumerate(data):
            if not 'oid' in obj:
                obj['oid'] = str(uuid.uuid4())
                changes_made = True

        if changes_made:
            with open(file_path, 'w') as file:
                json.dump(data, file, indent=4)
            print("Changes have been saved to the JSON file.")


    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

file_path = os.path.join(os.path.dirname(__file__), 'src\ShopItems.json')
print(file_path)
dataValidation(file_path)