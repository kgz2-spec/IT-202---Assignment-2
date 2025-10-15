function reverseString()
{
    const input= document.getElementById("userInput").value;
    if(input=== "")
    { 
        document.getElementById ("result").textContent="Please enter a valid string";
        return;
    }
    const reversed = input.split("").reverse().join("");
    document.getElementById("result").textContent = `Reverse: ${reversed}`;
}