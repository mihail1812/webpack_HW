export function renderItem (item){
    
    const itemElement = document.createElement('div');
    itemElement.className = "content__item";

    const resourceElement = document.createElement('div');
    resourceElement.className = "content__resource";

    if (item.type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.className = "content__img";
        imageElement.src = item.resource;

        resourceElement.appendChild(imageElement);
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio');
        audioElement.className = "content__audio";
        audioElement.src = item.resource;
        audioElement.controls = true;

        resourceElement.appendChild(audioElement);
    } else if (item.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.className = "content__video";
        videoElement.src = item.resource;
        videoElement.controls = true;

        resourceElement.appendChild(videoElement);
    }

    const itemName = document.createElement('p');
    itemName.className = "content__title";
    itemName.textContent = item.title;

    itemElement.appendChild(resourceElement);
    itemElement.appendChild(itemName);

    return itemElement;

}