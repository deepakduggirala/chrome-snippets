function zip(xs1, xs2){
    return xs1.map((e,i) => {
        return [e, xs2[i]];
    });
}

const update = value_f => prop => item => Object.assign(item, {[prop]: value_f(item[prop], item)});
const sanitize = obj => f => (prop, _default) => obj.hasOwnProperty(prop) ? f(obj[prop]) : _default;
const id = x => x;
//const sanitize_query = sanitize(matchedData(req));
//const searchText =  sanitize_query(id)('searchText', '');
//const page =        sanitize_query(x => parseInt(x))('page', 1);
const couple = o => Object.keys(o).map( key => [key, o[key]]);
const decouple = xs => xs.reduce( (acc, curr) => Object.assign(acc, {[curr[0]]: curr[1]}),{});
const renameFst = (f => xs => xs.map( x => [f(x[0]), x[1]] ))( key => mapping[type][key] || key );