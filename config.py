
class BaseConfig(object):
    SECRET_KEY = "SO_SECURE"
    DEBUG = True


class TestingConfig(BaseConfig):
    """Development configuration."""
    TESTING = True
    DEBUG = True
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'
    DEBUG_TB_ENABLED = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False

class ProductionConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/yourdb'
