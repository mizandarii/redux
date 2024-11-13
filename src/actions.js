export const inc = () => ({type:'INC'});
export const dec = () => ({type:'DEC'});

export const inc5 = () => ({type:'INC5'});
export const dec3 = () => ({type:'DEC3'});
export const rnd = (value) => ({type:'RND', payload: value});