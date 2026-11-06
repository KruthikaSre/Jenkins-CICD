const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My CI/CD Application</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #b3eff3;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card {
                background: white;
                padding: 55px 45px;
                border-radius: 20px;
                text-align: center;
                width: 90%;
                max-width: 500px;
                box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            }

            .badge {
                display: inline-block;
                background: #e8eaff;
                color: #5b5bd6;
                padding: 9px 16px;
                border-radius: 20px;
                font-size: 13px;
                margin-bottom: 25px;
            }

            h1 {
                color: #292957;
                font-size: 32px;
                margin-bottom: 18px;
            }

            p {
                color: #666;
                line-height: 1.7;
                margin-bottom: 28px;
            }

            button {
                background: #6854d9;
                color: white;
                border: none;
                padding: 13px 28px;
                border-radius: 8px;
                font-size: 15px;
                cursor: pointer;
                transition: 0.3s;
            }

            button:hover {
                background: #4935b5;
                transform: translateY(-3px);
            }

            .footer {
                margin-top: 30px;
                font-size: 12px;
                color: #999;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <div class="badge">⚡ Powered by Jenkins + Docker</div>

            <h1>Welcome Aboard! Kruthika</h1>

            <p>
                Building, testing and deploying applications
                automatically with the power of CI/CD.
            </p>

            <button onclick="alert('Your CI/CD pipeline is working!')">
                Explore More
            </button>

            <div class="footer">
                My First Automated Deployment
            </div>
        </div>
    </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});