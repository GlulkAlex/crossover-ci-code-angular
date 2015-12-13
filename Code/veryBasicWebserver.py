#!/usr/bin/env python
# -*- coding: utf-8 -*-

#utf_8 U8, UTF, utf8
"""
#!/usr/bin/env python -> python3
#!/usr/bin/python -> python2
"""

import http.server
import socketserver

# unit test
if __name__ == "__main__":

    PORT = 8000

    Handler = http.server.SimpleHTTPRequestHandler

    httpd = socketserver.TCPServer(
        ("", PORT), 
        Handler)

    print("""serving at port: {}""".format( PORT) )
    print("""interrupt by: {}""".format( "Ctrl + C") )
    print("""for some reasons does not show logging info""".format( ) )
    """
    http.server can 
    also be invoked directly 
    using 
    the '-m' switch of the interpreter 
    with a `port` number argument. 
    Similar to the previous example, 
    this serves files relative to 
    the current directory:
    >>>python -m http.server 8000
    """
    httpd.serve_forever()