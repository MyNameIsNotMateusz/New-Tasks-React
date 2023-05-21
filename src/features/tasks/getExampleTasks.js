export const getExampleTasks = async () => {
    const response = await fetch("../../../public/exampleTasks.jso")

    if(!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};
