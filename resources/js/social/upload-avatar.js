const inputFile = document.getElementById('input-upload-avatar');
if (inputFile) {
    document.getElementById('div-upload-avatar').addEventListener('click', () => {
        inputFile.click();
    });

    inputFile.onchange = () => document.getElementById('upload-picture-form').submit();
}
