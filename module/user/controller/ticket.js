import client from '../../../connection.js'
const addTicket = (req, res) => {
    let data = req.body
    const ticketId = Math.floor(Math.random() * 200) + 1;
    const currentDate = new Date();
    const date = currentDate.toLocaleString();
    let query = `insert into ticket (employee_id,ticket_id,name,personal_id,email,
        phone,city,address,complained_against,provider,title,details,ticket_status,date)
    values (${data.employee_id},${ticketId},'${data.name}','${data.personal_id}','${data.email}','${data.phone}',
    '${data.city}','${data.address}','${data.complained_against}','${data.provider}',
    '${data.title}','${data.details}',true,'${date}')`

    client.query(query, (err) => {
        if (!err) {

            res.send({ success: true })
        }
        else {
            res.send({ error: err.message })
        }
    }

    )
}
const getEmployeeTicket = (req, res) => {
    let query
    console.log(req.body)
    if (req.body.employee_id)
        query = `SELECT ticket.*,employee.name as empName FROM ticket 
        LEFT JOIN employee
        ON ticket.employee_id = employee.id
    WHERE  ticket.employee_id= ${req.body.employee_id} AND ticket.ticket_status=true`
    else
        query = `select ticket.*,employee.name as empName FROM ticket
        LEFT JOIN employee
        ON ticket.employee_id = employee.id
     where ticket.${req.body.searchBy} = '${req.body.search}'`

    console.log(query)
    client.query(query, (err, result) => {
        if (!err) {
            if (result.rowCount > 0) {

                res.send({ success: true, tickets: result.rows })
            }
            else {
                res.send({ success: false, tickets: [] })

            }
        } else {
            res.send({ error: err.message })
        }


    }

    )
}
const geAllTickets = (req, res) => {
    let query = `SELECT ticket.*,employee.name as empName
    FROM ticket
    LEFT JOIN employee
    ON ticket.employee_id = employee.id`

    console.log(query)
    client.query(query, (err, result) => {
        if (!err) {
            if (result.rowCount > 0) {

                res.send({ success: true, tickets: result.rows })
            }
            else {
                res.send({ success: false, tickets: [] })

            }
        } else {
            res.send({ error: err.message })
        }


    }

    )
}
const updateTicket = (req, res) => {
    console.log(req.body)
    let query
    if (req.body.replies) {
        query = `update ticket set replies = '${JSON.stringify(req.body.replies)}' where id =${req.body.id}`
    } else {
        query = `update ticket set ticket_status =${req.body.status} where id =${req.body.id}`
    }
    client.query(query, (err) => {
        if (!err) {

            res.send({ success: true })
        }
        else {
            res.send({ error: err.message })
        }
    }

    )
}

export { addTicket, getEmployeeTicket, updateTicket, geAllTickets }