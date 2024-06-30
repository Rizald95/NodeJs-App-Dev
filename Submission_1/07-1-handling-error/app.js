function parseURL(url) {
    try {
        return new URL(url);
    } catch (error) {
        return null
    }
}

const parsedUrl = parseURL("https://www.dicoding.com")
if (parsedUrl !== null) {
    console.log(parsedUrl);
} else {
    console.log("URL tidak valid.");
}