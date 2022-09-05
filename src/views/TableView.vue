<template>
  <div class="table">
    <div>
      <router-link class="btn" to="/">Home</router-link>
      <router-link class="btn" to="/bdflag">Flag</router-link>
      <router-link class="btn active" to="/table">Table</router-link>
      <router-link class="btn" to="/transform">Transform</router-link>
    </div>
    <div style="padding-top:5%;">
      <table>
      <tr>
        <th colspan="1"><br />Day/Period</th>
        <th colspan="1">I<br />9:30-10:20</th>
        <th colspan="1">II<br />10:20-11:10</th>
        <th colspan="1">III<br />11:10-12:00</th>
        <th colspan="1">12:00-12:40</th>
        <th colspan="1">IV<br />12:40-1:30</th>
        <th colspan="1">V<br />1:30-2:20</th>
        <th colspan="1">VI<br />2:20-3:10</th>
        <th colspan="1">VII<br />3:10-4:00</th>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Monday</th>
        <td colspan="1">ENG</td>
        <td colspan="1">Mat</td>
        <td colspan="1">Che</td>
        <td style="font-size: 150%" rowspan="6">
          <b>L<br />U<br />N<br />C<br />H</b>
        </td>
        <td colspan="3">LAB</td>
        <td colspan="1">Phy</td>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Tuesday</th>
        <td colspan="3">LAB</td>
        <td colspan="1">ENG</td>
        <td colspan="1">Che</td>
        <td colspan="1">Mat</td>
        <td colspan="1">SPORTS</td>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Wednesday</th>
        <td colspan="1">Mat</td>
        <td colspan="1">Phy</td>
        <td colspan="1">ENG</td>
        <td colspan="1">Che</td>
        <td colspan="3">LIBRARY</td>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Thursday</th>
        <td colspan="1">Phy</td>
        <td colspan="1">ENG</td>
        <td colspan="1">Che</td>
        <td colspan="3">LAB</td>
        <td colspan="1">Mat</td>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Friday</th>
        <td colspan="3">LAB</td>
        <td colspan="1">Mat</td>
        <td colspan="1">Che</td>
        <td colspan="1">ENG</td>
        <td colspan="1">Phy</td>
      </tr>

      <tr style="height: 50px">
        <th colspan="1">Saturday</th>
        <td colspan="1">ENG</td>
        <td colspan="1">Che</td>
        <td colspan="1">Mat</td>
        <td colspan="3">SEMINAR</td>
        <td colspan="1">SPORTS</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableView",
};
</script>

<style>
.btn {
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 10px 16px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
}
.active {
  background-color: cadetblue;
  color: antiquewhite;
}
.btn:hover {
  background-color: antiquewhite;
  color: #666;
}


table {
  width: 60%;
  margin: auto;
  border-style: outset;
  border-collapse: collapse;
}
th,
td {
  border: 3px solid black;
  text-align: center;
}
</style>
