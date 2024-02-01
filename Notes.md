1. In react we use multiple components to reder the layout of the website
2. Props are used to pass the properties to the component, this makes dynamic components
3. Components names must start with a capital letter
4. JSX is used to write HTML stuff
5. JSX rules must be followed, like ClassName, <>< /> & parent tag etc.
6. There are 5 ways to write CSS or do styling,
   a) inline CSS

   b)passing CSS byt variables

   c)importing style.css file

   d)Using bootstrap

   e)Using tailwinds CSS

7) React-icons library can be used for icons
8) Events are used by inline method
   const handler=(a,b)=>console.log(a+b);;

function Button() {
return (

<div>
<button
className="bg-white text-black p-1 rounded font-bold"
onClick={()=>handler(1,1)} >
Click me bro
</button>
</div>
);
}

export default Button;
The index.js is importing the password.js because the password component
is used in index.js. similary we can make seperate components for the
valid and Invalid functions

State: a state is a built in react object that is used to change the state of a component and when ever the state of a component changes , the component RE-RENDERS

To understand state we need to understand hooks, hooks were added to react in 16.8 version

Hooks: Hooks were added to use the State objects without using classes, like in 2018 class base components were used but in modren react functional based components are used , and hooks allow us to use states in functional based components too!

There alore of Hooks, like useState()

useState(): useState() hook allow us to track the state of a component, state is basically a set of properties of a component that needs to be tracked in the application.

The first step to use the useState is to import is then

import { useState } from "react";

function Button() {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
if (count == 0) {
// setCount("It's end bro");
} else {
setCount(count - 1);
}
};
return (
<>

<h2>{count}</h2>
<button
        className="bg-white text-black p-1 rounded font-bold mr-2"
        onClick={increment}
      > +
</button>
<button
        className="bg-white text-black p-1 rounded font-bold"
        onClick={decrement}
      > -
</button>
</>
);
}

export default Button;

Updating states of arrays :
import { useState } from "react";

function App() {
const [groupmember, setGroupmember] = useState([
"Hamza",
"Abdullah",
"Umair",
"Safwan",
]);

const addOne = () => {
setGroupmember([...groupmember, "Danish"]);
};
const removeOne = () => {
setGroupmember(groupmember.filter((g) => g !== "Hamza"));
};
const removeLast = () => {  
 setGroupmember(groupmember.slice(0, -1));
};
const updateOne = () => {
setGroupmember(groupmember.map((g)=>g==="Hamza" ? "Hamza Younis" : g));
};

return (
<>
{groupmember.map((g) => (

<li key={Math.random() \* 10}>{g}</li>
))}
<button onClick={addOne}>Add Group Member</button>
<button onClick={removeOne}>Remove Group Member</button>
<button onClick={removeLast}>Remove Last Member</button>
<button onClick={updateOne}>updateOne Member</button>

    </>

);
}

export default App;

Now using states for the array of objects:
import { useState } from "react";

function App() {
const [seller, setSeller] = useState([
{ name: "Muhammad Hamza", id: 1 },
{ name: "Muhammad Abdullah", id: 2 },
]);
const handleClick = () => {
setSeller(
seller.map((s) =>
(s.id === 2) ? { ...seller, name: "Muhammad Hamza" } : s
)
);
};
return (
<>
{seller.map((s, index) => (

<h2 key={index}>{s.name}</h2>
))}

      <button onClick={handleClick}>Update Name</button>
    </>

);
}

export default App;

Working with forms in React JS :
import { useState } from "react";

function App() {
const [username, setUsername] = useState("");
const handeChange = (event) => setUsername(event.target.value);
const handleSubmit=(event)=>{
event.preventDefault();
alert(`Your name is : ${username}`)
setUsername("")
}
return (
<>

<form onSubmit={handleSubmit}>
<input onChange={handeChange} type="text" value={username} />
<button type="submit">Bang!!</button>
</form>
</>
);
}

export default App;

Useeffect:
its used to hande the side effects of the components like, fetching data, directly uploading data to DOM , even console.log is also a side effect in React
There are 3 main concepts of useEffects :

1.  The code written in useEffect will execute as soon as the component renders
2.  The code will execute each time there is a change in the component's state
3.  The dependecies list can be used to make the code execute only with certain dependecies or to make it run only once

You can not put the useEffect function or code inside any if or conditional statement but you can use the conditional statemensts inside the useEffect!

Here is the example of a useEffect useage:

import { useState, useEffect } from "react";

function App() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log("I am effect");
if (count >0) {
document.title=(`Count is : ${count}`)
}
}, [count]);
return (
<>
<h2>{count}</h2>
<button onClick={() => setCount(count + 1)}>Increase</button>
</>
);
}

export default App;


Here is the example of how to use the use effect to fatch the APIs:
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function collectData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    collectData();
  });
  return (
    <>
      
        {data.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))}
    
    </>
  );
}

export default App;

