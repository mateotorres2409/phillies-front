from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def result():
    rq = request.json
    var_1 = rq.get('var_1')
    var_2 = rq.get('var_2')
    operation = rq.get('operation')
    
    if(operation == 'Addition'):
        result = var_1 + var_2
    elif(operation == 'Subtraction'):
        result = var_1 - var_2
    elif(operation == 'Multiplication'):
        result = var_1 * var_2
    elif(operation == 'Division'):
    	if(var_1==0 and var_2==0):
    		result = 0
    	else:
        	result = var_1 / var_2
    else:
        result = 0
        
    rs = app.make_response(jsonify({ "result": result}))
    rs.headers['content-type'] = 'application/json'
    return rs

if __name__ == '__main__':
    app.run(debug=True,port=80)