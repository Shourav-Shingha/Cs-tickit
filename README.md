Question 1 = What is JSX, and why is it used?

ans: Javascript XML,  its besically a writing style where we able to write javascript and html together. it's used to creat simplysityin coding and better ui design.


Question 2 = What is the difference between State and Props?
ans: state is declear to change or update any kind of data increase or decrease,its also help to switch  sumthing conditionally by useing true, false. 
props r besically like a turnel or portel.  its send data from one component to another components. 


Question 3 = What is the useState hook, and how does it work?
ans: const [use, setuse]=usestate()
usestate is like a function. according to the example  use is the data. data can be update by useing setuse(use+ anything) and it will stay in under usestate() 


Question 4 = How can you share state between components in React?
ans: example....
const [use, setuse]=usestate()
return(
    <components use={use} setuse={setuse}>
    anyone can able to change the name before (=) equal
)


Question 5 = How is event handling done in React?
ans: javascript eventhandelling like add even listener dose not word in react. In react its totally update and easy. just add onclick() where you want to used eventHandeling. then call a function in  onclick like onclick(handleClick()) now its ready  just write a handleClick function on the top under the main function  and write whatever you want in the function. just check if you dont want to automatic call the onclick function.  if dont ? just use onclick(()=>handleClick()) like this.