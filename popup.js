const btn = document.querySelector('.fetchTitleBtn');
const fetched = document.querySelector('.fetched');
const fetchedTitle = document.querySelector('.fetchedTitle');

function getCurrentTab() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(tabs);
        });
    });
}

btn.addEventListener('click', async () => {
    try {
        const currentTab = await getCurrentTab();
        const currentTabTitle = currentTab[0].title; 

        fetched.textContent = "Title: ";
        fetchedTitle.textContent =  currentTabTitle;
        
    } catch (error) {
        console.error('Error fetching tab title:', error);
    }
});
