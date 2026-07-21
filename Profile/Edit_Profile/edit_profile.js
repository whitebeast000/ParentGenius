    const input = document.querySelector("#phone");
        
        // Initialize the plugin
        window.intlTelInput(input, {
            initialCountry: "pk", // Sets Pakistan as the default country
            separateDialCode: true, // Shows the dial code separately from the input
            utilsScript: "https://jsdelivr.net" // Enables validation and formatting
        });