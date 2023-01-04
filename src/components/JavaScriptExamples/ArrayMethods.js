const ArrayMethods = () => {

    const myArray = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

    const myList = myArray.map((item) => <li>{item}</li>);

    return (
        <div>
            <div>
                <h3>map() example</h3>
                {myList}
            </div>
            <div>
                <h3>filter() example</h3>
                {myArray.filter(item => item.includes('p')).map(filteredItem => (
                    <li>{filteredItem}</li>
                ))}
            </div>
            <div>
                <h3>find() example</h3>
                {myArray.find(obj => obj==='Orange')}
            </div>
            <div>
                <h3>forEach() example(check console)</h3>
                {myArray.forEach(element => console.log(element))}
            </div>
        </div>
    );
}

export default ArrayMethods;