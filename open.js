function open() {
    
    // If it's not an universal app, use IS_IPAD or IS_IPHONE
    if (IS_IOS) {
        window.location = "myapp://view?id=123";
    
        setTimeout(function() {
    
            // If the user is still here, open the App Store
            if (!document.webkitHidden) {
    
                // Replace the Apple ID following '/id'
                window.location = 'https://apps.apple.com/app/id1491105910';
            }
        }, 25);
    
    } else if (IS_ANDROID) {
    
        // Instead of using the actual URL scheme, use 'intent://' for better UX
        window.location = 'intent://view?id=123#Intent;package=com.app.sabuy;scheme=sabuy;launchFlags=268435456;end;';
    }
}