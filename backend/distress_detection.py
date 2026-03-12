def detect_distress(text):

    keywords = ["help","danger","save me"]

    for word in keywords:

        if word in text.lower():
            return True

    return False