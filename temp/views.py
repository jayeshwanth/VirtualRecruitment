# Create your views here.
from django.http import HttpResponse
from django.template import loader
from opentok import OpenTok

api_key = 45717642
api_secret = "df1752d514a1e6d89f98a66bb661a08c2db8ee73"
opentok = OpenTok(api_key, api_secret)
session = opentok.create_session()
#create session ID from the created session above
session_id = session.session_id
#Now generate the token for this session
token = session.generate_token()


def index(request):
    template = loader.get_template('index.html')
    context ={ #Has all the data for index.html view to render to the user
        'sessionID' : session_id,
        'token' : token,
        'Api_key' : api_key

    }
    return HttpResponse(template.render(context, request))

def fetchvid(request):
    template = loader.get_template('vid.html')
    context ={ #Has all the data for index.html view to render to the user
        'sessionID' : session_id,
        'token' : token,
        'Api_key' : api_key

    }
    return HttpResponse(template.render(context, request))

def student(request):
    template = loader.get_template('student.html')
    context ={ #Has all the data for index.html view to render to the user
        'sessionID' : session_id,
        'token' : token,
        'Api_key' : api_key

    }
    return HttpResponse(template.render(context, request))