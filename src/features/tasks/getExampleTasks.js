export const getExampleTasks = async () => {
    const response = await fetch("/New-Tasks-React/exampleTasks.json")

    if(!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};
