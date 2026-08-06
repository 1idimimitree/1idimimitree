function copiarDiscord() {
    const user = "@masivekiwi";
    navigator.clipboard.writeText(user).then(() => {
        const status = document.getElementById("discordStatus");
        if (status) {
            const originalText = status.textContent;
            status.textContent = "[COPIADO!]";
            status.style.color = "#36BD14";
            status.style.borderColor = "#36BD14";
            status.style.textShadow = "0 0 8px #36BD14";
            setTimeout(() => {
                status.textContent = originalText;
                status.style.color = "";
                status.style.borderColor = "";
                status.style.textShadow = "";
            }, 2000);
        }
    }).catch(err => {
        console.error("Error al copiar tag de Discord: ", err);
    });
}
