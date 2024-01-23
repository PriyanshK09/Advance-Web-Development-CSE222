try {
    // Code that may throw an error
    throw new Error("An ERROR");
} catch (error) {
    // Code to handle the error
    console.error("Error: ", error);
} finally {
    // Code to be executed regardless of an error
    console.log("Finally");
}