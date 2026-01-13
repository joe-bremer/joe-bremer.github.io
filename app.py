from flask import *

app = Flask(__name__)

@app.route("/")
def page_index():
    return render_template("/index.html", title="Joseph Bremer")

@app.route("/project_template")
def page_project_template():
    return render_template("/project-template.html", title="Project Template")