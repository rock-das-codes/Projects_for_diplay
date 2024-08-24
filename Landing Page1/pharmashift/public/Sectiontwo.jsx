export default function Sectiontwo(){
    return(<>
    <div className="max-h-screen w-full">
        <div className="table mt-24 ml-4 md:relative md:w-1/2 md:left-[30%] w-[90%] shadow-lg">
        <table className="xs:w-full "> 
            <tr className="w-full bg-[#6FECF4] text-center">
                <th className="w-1/3 px-4 py-2" >Medicine</th>
                <th className="w-1/3  py-2">Private Price</th>
                <th className="w-1/3 px-4 py-2">Govt Price</th>
            </tr>
            <tr className="text-center"><td>as</td><td>as</td><td>as</td></tr>
            <tr className="text-center"><td>as</td><td>as</td><td>as</td></tr>
            <tr className="text-center"><td>as</td><td>as</td><td>as</td></tr>
            <tr className="text-center"><td>as</td><td>as</td><td>as</td></tr>
        </table>
        <div id="buyno" className="flex mt-4  mx-4">
            <div className="w-1/2 flex justify-center items-center">
            <div className="rounded-[50%] w-20 h-20 border-[#00FF19] border border-4 shadow-lg items-center text-2xl bold flex justify-center">60%</div></div>
        <div className="text-2xl w-1/2 flex mt-6 flex-col justify-center mb-4 items-center"> <div className="">BUY NOW!</div> <button className="block bg-green-700 px-8 py-1 mt-2 text-white rounded text-xl semibold">GO</button></div></div>
        </div>
        <span className="block text-3xl mt-8 mb-8 text-center">Or</span>
        <div className="share flex md:h-[200px] ">
            <div className="c w-1/2"><img src="bike.png" alt="" /></div>
            <div className="c w-1/2"><div className="pr mr-4 md:text-3xl md:w-[40%] text-xl mb-2">Share your prescription, directly to us</div>
            <button className="bg-black text-white text-sm px-2 rounded  ">Share on WhatsApp</button> </div>
        </div>
        <div className="bg-black w-full mt-8 text-white pl-4">Built by DevDas</div>
    </div>
    </>)
}