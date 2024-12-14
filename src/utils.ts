export function isBlockedURL(url:string) {
    const blockedPattern = /^(?:https?:\/\/)?(?:www\.)?(youtube\.com|youtu\.be|instagram\.com|facebook\.com|twitter\.com)(\/|$)/;
    return blockedPattern.test(url);
}
export function isValidURL(url:string) {
    const urlPattern = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(\/|$)/;
    return urlPattern.test(url);
}