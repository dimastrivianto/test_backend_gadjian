const conn = require('./database')
const router = require('express').Router()
const formula = require('../jawabanNo1,2,3/test')

/////////
///GET///
/////////

router.get('/api/employees', (req, res) => {
  const sql = 'SELECT * FROM employees'

  conn.query(sql, (err, result) => {
    if (err) return res.status(500).send(err)

    res.status(200).send(result)
  })
})

router.get('/api/employees/:id', (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM employees WHERE id=${id}`

  conn.query(sql, (err, result) => {
    if(err) return res.status(500).send(err)

    res.status(200).send(result[0])
  })
})

//////////
///POST///
//////////

router.post('/api/employees', (req, res) => {
  const data = req.body
  const sqlPost = 'INSERT INTO employees SET ?'

  conn.query(sqlPost, data, (err, result) => {
    if(err) return res.status(500).send(err)

    const sqlGet = `SELECT * FROM employees WHERE id = ${result.insertId}`
    conn.query(sqlGet, (err, result) => {
      if(err) return res.status(500).send(err)

      res.status(201).send(result[0])
    })
  })
})

router.post('/api/reverse',  (req, res) => {
  
  let {character} = req.body
  let result = formula.reverse(character)

      res.status(200).send({result})
})

router.post('/api/fibonacci', (req, res) => {
  const {n} = req.body
  let result = formula.fibonacci(n)

  res.status(200).send(result)
})

//////////
///PUT///
//////////

router.put('/api/employees/:id', (req, res) => {
  const data = req.body
  const id = req.params.id
  const sqlPut = `UPDATE employees SET ? WHERE id = ${id}`

  conn.query(sqlPut, data, (err, result) => {
    if(err) return res.status(500).send(err)

    const sqlGet = `SELECT * FROM employees WHERE id = ${id}`

    conn.query(sqlGet, (err, result) => {
      if(err) return res.status(500).send(err)

      res.status(201).send(result[0])
    })
  })
})

////////////
///DELETE///
////////////

router.delete('/api/employees/:id', (req, res) => {
  const id = req.params.id
  const sql = `DELETE FROM employees WHERE id = ${id}`

  conn.query(sql, (err, result) => {
    if(err) return res.status(500).send(err)

    res.status(204).send()
  })
})
module.exports = router