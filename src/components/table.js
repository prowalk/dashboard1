import React from 'react'

const Table = ({title, values}) => {

    const Titles = () => title.map(item => (<th>{item}</th>))

    const Datas = () => {
        var data = []
        values.forEach((element, index) => {
            let tbody = []
            for (const key in element) {
                tbody.push((<td key={key}>{element[key]}</td>))
            }
            data.push(<tr key={index}>{tbody}</tr>)
        })

        return data
    }

    return(
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        {Titles()}
                    </tr>
                </thead>
                <tbody>
                    {Datas()}
                </tbody>
            </table>
        </div>
    )

}

export default Table