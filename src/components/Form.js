import React from 'react';

const Form = (props) => {

    const {
        values,
        change,
        disabled,
        errors,
        submit
    } = props;

    const handleChange = e => {
        const {name, value, type, checked} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        // console.log(`Name: ${name}, value: ${valueToUse}`)
        change(name, valueToUse);
    }

    const handleSubmit = e => {
        e.preventDefault();
        submit()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Build the pizza you've been craving.</h2>
            <div className="errors">
                <h2>{errors.name}</h2> 
                <h2>{errors.size}</h2> 
            </div>
            
            <p>Who's the order for?</p>
            <label>*Name:
            <input 
                autoComplete="off"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
            />
            </label><br />
            <p>Pick a size that suits you.</p>
            <label>*Size:
            <select 
                name="size"
                value={values.size}
                onChange={handleChange}
            >    
            <option value="">-Choose a Size-</option>
            <option value="small">Small</option>
            <option value="medium">Med</option>
            <option value="large">Large</option>
            </select>
            </label>
            <p>Toppings</p>
            <label>Pepperoni
                <input 
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={handleChange}
                />
            </label><br />
            <label>Mushroom
                <input 
                    type="checkbox"
                    name="mushroom"
                    checked={values.mushroom}
                    onChange={handleChange}
                />
            </label><br />
            <label>Ham
                <input 
                    type="checkbox"
                    name="ham"
                    checked={values.ham}
                    onChange={handleChange}
                />
            </label><br />
            <label>Olives
                <input 
                    type="checkbox"
                    name="olives"
                    checked={values.olives}
                    onChange={handleChange}
                />
            </label><br />
            <label>*required</label><br />
            <button
                type="submit"
                disabled={disabled}
            >Place my order</button>
        </form>
        </>
    )
}

export default Form;