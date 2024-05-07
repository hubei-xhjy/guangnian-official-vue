export function useAjax() {
    return (method: string, url: string, successCallback: Function, errorCallback: Function) => {
        const xHttp: XMLHttpRequest = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    if (this.responseText.startsWith("<!DOCTYPE html>")){
                        errorCallback("Error: file not found - "+ url)
                    }
                    successCallback(xHttp.responseText);
                } else {
                    errorCallback("Error: " + xHttp.statusText);
                }
            }
        };
        xHttp.open(method, url, true);
        xHttp.send();
    };
}