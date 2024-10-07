from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql as sql

app = Flask(__name__)
CORS(app)

def make_connection():
    connection = sql.connect(host='localhost', user='root', password='admin@2003', database='products', cursorclass=sql.cursors.DictCursor)
    return connection

@app.route('/signup', methods=['POST'])
def signup():
    print('called')
    data = request.get_json()
    print(data)
    connection = make_connection()
    cursor = connection.cursor()
    cursor.execute('insert into user (name, email, number, password) values(%s, %s, %s, %s)', (data['name'], data['email'], data['number'], data['password']))
    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({"message": "User added sucessfully"}), 200


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    connection = make_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM user where email = %s and password = %s', (data['email'], data['password']))
    users = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(users), 200


if __name__ == '__main__':
    app.run()