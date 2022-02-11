import {useState, useRef, useEffect} from 'react'

export default function MyInput2(props){
  const [value, setValue] = useState(props.value);
  const [isDirty, setIsDirty] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const fieldRef = useRef();

  useEffect(()=>{
    console.log('MyInput2 mounted');
    return ()=>{
      console.log('Unmounted')
    }

  },[]);

  useEffect(()=>{
    if(props.value !== value){
      console.log("setting dirty");
      setIsDirty(true);
    }
  },[value])

  useEffect(()=>{
    console.log("Re-render");
  })

  const handleUpdate = (event)=>{
    setValue(event.target.value);
  }

  const handleClick = (event)=>{
    if (isDirty){
      const regExName = /^[A-Z][a-zA-Z]*$/
      const isNameValid = regExName.test(value);
      setIsValid(isNameValid);
      
      !isNameValid && fieldRef.current.focus();
    }
  }

  console.log(value, isDirty, isValid);
  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        onChange={handleUpdate}
        ref={fieldRef}
        type="text"
        value={value}
      />
      {isDirty && !isValid ? 
        (<div>Invalid Name</div>):(<br />)
      }
      <button
          type="button"
          onClick={handleClick}
        >
          Validate
        </button>
    </div>
  )
}