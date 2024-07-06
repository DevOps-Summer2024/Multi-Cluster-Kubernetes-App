FROM python:3.9-slim

WORKDIR /app

COPY sa-logic/sa/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

RUN python -m textblob.download_corpora
CMD ["python", "sa-logic/sa/sentiment_analysis.py"]
