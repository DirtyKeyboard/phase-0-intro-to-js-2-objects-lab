const employee = {
    name : "Andrew Hawileh",
    streetAddress : "1550 W Plano Pkwy"
}

function updateEmployeeWithKeyAndValue(empObj, key, value)
{
    return {...empObj, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value)
{
    empObj[key] = value;
    return empObj;
}

function deleteFromEmployeeByKey(empObj, key)
{
    const obRet = {...empObj};
    delete obRet[key];
    return obRet;
}

function destructivelyDeleteFromEmployeeByKey(empObj, key)
{
    delete empObj[key];
    return empObj;
}