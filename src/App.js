import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Tablehead from '@material-ui/core/Tablehead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id' : 1,
    'image' : "http://placeimg.com/64/64/any",// 랜덤 이미지 64*64
    'name' : '나동빈',
    'birthday' : '911222',
    'gender' : '남',
    'job' : '대학생' 
  },
  {
    'id' : 2,
    'image' : "http://placeimg.com/64/64/1",// 랜덤 이미지 64*64
    'name' : '이순신',
    'birthday' : '961222',
    'gender' : '남',
    'job' : '프로그래머' 
  },
  {
    'id' : 3,
    'image' : "http://placeimg.com/64/64/2",// 랜덤 이미지 64*64
    'name' : '홍길동',
    'birthday' : '981222',
    'gender' : '남',
    'job' : '디자이너' 
  },
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <Tablehead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </Tablehead>
          
          <TableBody>


            {
              customers.map(c => {
                return (
                  <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                  />
                );
              })
            }
            </TableBody>
          </Table>
      </Paper>
    );

  }
}

export default withStyles(styles)(App);
